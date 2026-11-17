from rest_framework import viewsets, mixins
import logging
from django.conf import settings
from django.core.mail import send_mail


logger = logging.getLogger(__name__)

from .models import (
    Profile,
    Skill,
    Project,
    Experience,
    Education,
    Certification,
    ContactMessage,
)

from .serializers import (
    ProfileSerializer,
    SkillSerializer,
    ProjectSerializer,
    ExperienceSerializer,
    EducationSerializer,
    CertificationSerializer,
    ContactMessageSerializer,
)


# Public read-only portfolio APIs

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class CertificationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer


# Public contact form: create messages only
class ContactMessageViewSet(
    mixins.CreateModelMixin,
    viewsets.GenericViewSet
):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        contact = serializer.save()

        profile = Profile.objects.first()

        if not profile or not profile.email:
            logger.warning("No notification email found in Profile.")
            return

        subject = f"New Portfolio Message: {contact.subject or 'No Subject'}"

        message = (
            f"You received a new message through your portfolio.\n\n"
            f"Name: {contact.name}\n"
            f"Email: {contact.email}\n"
            f"Subject: {contact.subject}\n\n"
            f"Message:\n{contact.message}"
        )

        try:
            	send_mail(
  		      subject,
  		      message,
		      settings.DEFAULT_FROM_EMAIL,
    		      [profile.email],
		      fail_silently=False,
		)
        except Exception:
            logger.exception("Portfolio contact notification email failed.")
