FROM python:3.8.2-slim-buster

RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN mkdir /home/ddb
WORKDIR /home/ddb
COPY . /home/ddb/.
RUN apt -y update
RUN apt install -y python3-venv
RUN python3 -m venv venv3
RUN source venv3/bin/activate
RUN pip3 install -r requirements.txt
RUN pip3 install awscli
RUN mkdir -p /root/.aws
COPY aws-local-ddb-credentials.txt /root/.aws/credentials
COPY aws-local-ddb-config.txt /root/.aws/config
ENTRYPOINT ["./docker-compose-upload.sh"]
#ENTRYPOINT ["tail", "-f", "/dev/null"]
