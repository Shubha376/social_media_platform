from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.user_login, name='login'),
    path('signup/', views.user_signup, name='signup'),
    path('index/', views.user_index, name='index'),
    path('msg/',views.user_msg,name='msg'),
    path('profile/',views.user_profile,name='profile'),
    path('notification/',views.user_notification,name='notification'),
    path('settings/',views.user_settings,name='settings'),
    path('language/',views.user_language,name='language'),
    path('about/',views.user_about,name='about'),
    # path('post.js/',views.user_post.js,name='post,js'),
    path('contact/',views.user_post.contact,name='contact'),
    path('hashtag/',views.user_hashtag,name='hashtag'),
    path('faq/',views.user_faq,name='faq'),
    path('terms/',views,user_terms,name='terms'),
    path('forgot-pass',views,user_forgot-pass,name='forgot'),
    path('logout',views,user_logout,name='logout')


    
    
    
    
    
    
    






    
    # path('forgot_password/', views.user_forgot_password, name='forgot_password'),
    # path('social-auth/', include('social_django.urls', namespace='social')),
    # path('profile/', views.user_profile, name='profile'),
    # path('msg/', views.user__msg, name='msg'),
    # path('notification/', views.user__notification, name='notification'),
    


    














          # copy of barber

    # path('item_list.html', views.item_list, name='item_list'),
    # path('<int:pk>/', views.item_detail, name='item_detail'),
    # path('new/', views.item_create, name='item_create'),
    # path('<int:pk>/edit/', views.item_update, name='item_update'),
    # path('<int:pk>/delete/', views.item_delete, name='item_delete'),
    # path('signin.html', views.signin, name='signin'),
]
