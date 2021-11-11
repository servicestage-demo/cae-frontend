FROM 100.79.1.215:20202/op_svc_servicestage/node-x86_64:8-int-1.0
WORKDIR /var/cae-frontend
COPY ./ /var/cae-frontend/
CMD ["bash", "run.sh"]