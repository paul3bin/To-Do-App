# Generated by Django 3.0.3 on 2020-11-18 16:58

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('details', models.TextField()),
                ('date', models.DateTimeField(default=datetime.datetime(2020, 11, 18, 16, 58, 47, 554297, tzinfo=utc))),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='todos', to='accounts.User')),
            ],
        ),
    ]
