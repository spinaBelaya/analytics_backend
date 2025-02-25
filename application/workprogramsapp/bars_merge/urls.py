# Запросы для работы с БАРС
from django.urls import path

from workprogramsapp.bars_merge.views import FindSimilarEP, FindSimilarWP, CreateCheckPoint, \
    SendCheckpointsForAcceptedWP, SetBarsPointerTrueToWP

urlpatterns = [

path('api/bars_tools/similar_ep', FindSimilarEP),
path('api/bars_tools/similar_wp', FindSimilarWP),
path('api/bars_tools/post_checkpoint', CreateCheckPoint),
path('api/bars_tools/post_all_checkpoints', SendCheckpointsForAcceptedWP),
path('api/bars_tools/set_bars_pointer_true', SetBarsPointerTrueToWP),
    ]