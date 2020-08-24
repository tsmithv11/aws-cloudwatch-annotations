# aws-cloudwatch-annotate-api

Based on [aws-cloudwatch-annotations](https://github.com/anaynayak/aws-cloudwatch-annotations). 

Annotate Cloudwatch dashboards with vertical annotations automatically by sending JSON to the API. Make sure to update "cloudwatch.js" with your region of your dashboard.

If you're running this on an EC2 instance add the following permissions to the instance role. Adapt it with the correct AWS account ID and dashboard name(s).
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudwatch:PutDashboard",
                "cloudwatch:GetDashboard"
            ],
            "Resource": [
                "arn:aws:cloudwatch::123456789123:dashboard/annotations"
            ]
        }
    ]
}
```

## JSON format

Use the following format for your JSON:

```json
{
    "dashboardName":"${dasboardName}",
    "type":"${vertical_or_horizontal}",
    "widgetTitle":"${title_of_widget_to_update}",
    "time":"${time_or_value}"
}
```
