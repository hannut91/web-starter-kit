# Web Starter Kit

## Deploy

```bash
npm run build
BUCKET=yunseok-starter-test
aws s3 rm s3://$BUCKET  --include "*" --recursive
aws s3 cp dist s3://$BUCKET --recursive --exclude ".DS_Store" --acl public-read --content-encoding=gzip
```
