# aws-cloudwatch-annotate-api

Based on [aws-cloudwatch-annotations](https://github.com/anaynayak/aws-cloudwatch-annotations). 

Annotate Cloudwatch dashboards with vertical annotations automatically by sending JSON to the API.

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
