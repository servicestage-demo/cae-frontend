FROM swr.cn-east-2.myhuaweicloud.com/op_svc_cse/node-x86_64:8-int-1.0
WORKDIR /var/cae-frontend
COPY ./ /var/cae-frontend/
CMD ["bash", "run.sh"]