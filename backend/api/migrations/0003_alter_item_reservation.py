# Generated by Django 4.0.6 on 2022-08-08 03:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_item'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='reservation',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.reservation'),
        ),
    ]
