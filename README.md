<h2 align="center">front-end-cli</h2>

# Installation
```
$ npm i create-front-end-cli -g
```
# Usage
Run the following command line to create the project:
```
$ front-end-cli init myproject
```

# Parameter
## init <PROJECT_NAME>
Create the JavaScript plugin project:
```
$ front-end-cli init myproject
```

## upgrade
Check the new version is available or not:
```
$ front-end-cli upgrade
```

## template
You can download or upgrade the template from mirror:
```
$ front-end-cli template
```

## mirror <TEMPLATE_MIRROR>
You can also set the template mirror like this:
```
$ front-end-cli mirror https://zpfz.vercel.app/download/files/frontend/tpl/front-end-cli/
```
**NOTE**  
You can customize the template mirror link by youself, but the template file name must be `template.zip`, and the mirror link should be `/` ending.  
For example, the full link to your custom template mirror is `https://example.com/mirror/template.zip`, the mirror link that front-end-cli can recognize should be `https://example.com/mirror/`.  

You can download the front-end-cli template from [front-end-cli/tpl](https://github.com/zpfz/front-end-cli/tree/master/tpl). 
