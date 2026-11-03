from rest_framework.routers import DefaultRouter

from .views import (
    ProfileViewSet,
    SkillViewSet,
    ProjectViewSet,
    ExperienceViewSet,
    EducationViewSet,
    CertificationViewSet,
    ContactMessageViewSet,
)

router = DefaultRouter()

router.register("profile", ProfileViewSet, basename="profile")
router.register("skills", SkillViewSet, basename="skills")
router.register("projects", ProjectViewSet, basename="projects")
router.register("experience", ExperienceViewSet, basename="experience")
router.register("education", EducationViewSet, basename="education")
router.register("certifications", CertificationViewSet, basename="certifications")
router.register("contact", ContactMessageViewSet, basename="contact")

urlpatterns = router.urls
