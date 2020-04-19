NOTE:
- This directory is not baked into jar.
- You have to add either resources/config/dev or resources/config/prod or some other directory which provides  config.edn and logback.xml configuration files to classpath.
- The config.edn provides :ss-env which tells the environment we are running (single-node vs. dynamodb...).
- The config.edn gives path to data which has single-node data files.