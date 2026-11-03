from rest_framework import viewsets, mixins

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
