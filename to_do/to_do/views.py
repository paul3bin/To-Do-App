from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = 'index.html'

class ThanksPage(TemplateView):
    template_name = 'thanks.html'

class UserHomePage(TemplateView):
    template_name = 'user_home.html'