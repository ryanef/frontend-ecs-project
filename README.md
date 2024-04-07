# NGINX serving static React

To follow along with the Fargate project, you need a frontend container exposing port 3000.
Build the image locally, push it to Elastic Container Registry.

You need Docker and AWS CLI installed, replace REGION and ACCOUNTNUMBER with your information.

Dockerfile.prod uses NGINX to serve static files after `npm run build`.
Dockerfile.dev uses the Vite local development server for local testing when you run `npm run dev`

Only Dockerfile.prod will work in AWS with Fargate and ALB so be sure to build your image with that using the `-f Dockerfile.prod` flag on the build line.

```bash
aws ecr get-login-password --region REGION | docker login --username AWS --password-stdin ACCOUNTNUMBER.dkr.ecr.REGION.amazonaws.com

docker build -t reactdevtest -f Dockerfile.prod .

docker tag reactdevtest:latest ACCOUNTNUMBER.dkr.ecr.REGION.amazonaws.com/reactdevtest:latest

docker push ACCOUNTNUMBER.dkr.ecr.REGION.amazonaws.com/reactdevtest:latest
```
