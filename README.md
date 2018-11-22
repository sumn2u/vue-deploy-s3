# vue-deploy-s3

[![GitHub issues](https://img.shields.io/github/issues/sumn2u/vue-deploy-s3.svg)](https://github.com/sumn2u/vue-deploy-s3/issues) [![GitHub forks](https://img.shields.io/github/forks/sumn2u/vue-deploy-s3.svg)](https://github.com/sumn2u/vue-deploy-s3/network) [![GitHub stars](https://img.shields.io/github/stars/sumn2u/vue-deploy-s3.svg)](https://github.com/sumn2u/vue-deploy-s3/stargazers) [![GitHub license](https://img.shields.io/github/license/sumn2u/vue-deploy-s3.svg)](https://github.com/sumn2u/vue-deploy-s3/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/sumn2u/vue-deploy-s3/branch/master/graph/badge.svg)](https://codecov.io/gh/sumn2u/vue-deploy-s3) [![Build Status](https://travis-ci.org/sumn2u/vue-deploy-s3.svg?branch=master)](https://travis-ci.org/sumn2u/vue-deploy-s3) [![Twitter](https://img.shields.io/twitter/url/https/github.com/sumn2u/vue-deploy-s3.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsumn2u%2Fvue-deploy-s3)

>  Deploy vue app to s3 and Cloudfront with versioning and activation features.

```

                                     _                  _                                 _____ 
 __   __  _   _    ___            __| |   ___   _ __   | |   ___    _   _           ___  |___ / 
 \ \ / / | | | |  / _ \  _____   / _` |  / _ \ | '_ \  | |  / _ \  | | | |  _____  / __|   |_ \ 
  \ V /  | |_| | |  __/ |_____| | (_| | |  __/ | |_) | | | | (_) | | |_| | |_____| \__ \  ___) |
   \_/    \__,_|  \___|          \__,_|  \___| | .__/  |_|  \___/   \__, |         |___/ |____/ 
                                               |_|                  |___/                       

```

This package doesn't build the app, instead use webpack or vue cli to build your application instead.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

```sh
npm i -g vue-deploy-s3

# or

yarn global add vue-deploy-s3

```

## Usage
> vue-deploy-s3
```
 Usage: vue-deploy-s3 [options] [command]


  Commands:

    setup                 run deployment configuration file
    deploy [env]          deploy code to s3 bucket with specific environment
    list [env]            list deployed version from s3
    activate <key> [env]  activate version with or specific environment

  Options:

    -h, --help     output usage information
    -V, --version  output the version number



```
 To initialize setup file for vue-deploy-s3 , go inside your vue app project root directory and  use following command 

> vue-deploy-s3 setup
```

                                     _                  _                                 _____ 
 __   __  _   _    ___            __| |   ___   _ __   | |   ___    _   _           ___  |___ / 
 \ \ / / | | | |  / _ \  _____   / _` |  / _ \ | '_ \  | |  / _ \  | | | |  _____  / __|   |_ \ 
  \ V /  | |_| | |  __/ |_____| | (_| | |  __/ | |_) | | | | (_) | | |_| | |_____| \__ \  ___) |
   \_/    \__,_|  \___|          \__,_|  \___| | .__/  |_|  \___/   \__, |         |___/ |____/ 
                                               |_|                  |___/                       

Result:


✓ Deployment file created

➡  Type help command to proceed further


```
It will automatically create a deploy.js file. Now inside deploy.js file put your s3 bucket name, along with ACCESSKEYID and SECERETKEY.

After building your vue app. It's time to deploy your app to S3 bucket.

> vue-deploy-s3 deploy development

```

Checking configuration file

Result:

Starting 'upload:development'...
Finished 'upload:development' after 1ms

Revision created successfuly

```
It will upload your assests to the s3 bucket with uniquely generated file name. 
![upload revisions](img/deploy.png)

In order to get revision of deployed files we use list command.

>  vue-deploy-s3 list development

```

Checking configuration file
Result:
Starting 'list:development'...
Finished 'list:development' after 4ms
┌───────────────────┬──────────────────────────────┐
│ RevisionKey       │ Commit Date                  │
├───────────────────┼──────────────────────────────┤
│   index:01403ec   │ 2018/04/04 14:26:29          │
├───────────────────┼──────────────────────────────┤
│   index:527cd76   │ 2018/04/04 14:34:49          │
├───────────────────┼──────────────────────────────┤
│   index:6993120   │ 2018/04/04 14:09:03          │
├───────────────────┼──────────────────────────────┤
│   index:fa51993   │ 2018/04/04 15:41:51          │
└───────────────────┴──────────────────────────────┘
 
```
To activate a specific version use the activate command followed by key.

>  vue-deploy-s3 activate fa51993 development

```
Checking configuration file
Result:
Starting 'activate:fa51993'...
Finished 'activate:fa51993' after 6ms
Activating index file of key fa51993
Revision activated successfully


```

To revert application to a specific version use the activate command followed by key.

>  vue-deploy-s3 activate 6993120 development

```
Checking configuration file
Result:
Starting 'activate:6993120'...
Finished 'activate:6993120' after 6ms
Activating index file of key 6993120
Revision activated successfully


```


## Contribute

Contributors are welcome.
Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification. 

## License

MIT © sumn2u
