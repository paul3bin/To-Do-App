# Generated by Django 3.0.3 on 2020-12-06 03:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('to_do_api', '0002_auto_20201205_2107'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='title',
            new_name='task',
        ),
    ]
