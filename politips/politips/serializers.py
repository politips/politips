from django.contrib.auth.models import User
from politips.models import Legislator
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'first_name', 'last_name',)

class LegislatorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Legislator
        fields = ('url', 'name')
