# nginx
## `nginx`配置

+ `nginx.conf` 下配置
```
server {
    ......
    include server_conf/*;
}
```
+ `server_conf/`下配置
+
```
server {
    listen       8080;
    server_name  localhost;

    access_log  /home/XXX/logs/XXX/access.log  main;
    error_log  /home/XXX/logs/XXX/error.log;

    index index.html index.shtml;
    root  /home/XXX/www/XXX;

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
    location ^~ /api/ {
       proxy_pass http://127.0.0.1:8080;
    }
    location ~* \.(html|shtml|htm|inc|log)$ {
            expires 1m;
    }
    location ~* \.(css|js)$ {
            expires 1m;
    }
    location ~* ^.+\.(jpg|jpeg|gif|swf|mpeg|mpg|mov|flv|asf|wmv|avi|ico)$ {
            expires 15d;
    }
    location / {
        try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
}
```

## `nginx`配置`gzip`

```
gzip              on;
gzip_buffers      16 8k;
gzip_comp_level   9;
gzip_min_length   1024;
gzip_types        text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
gzip_vary         on;
```

## `nginx`配置转发

- 将`/api/`开头访问的路径转到`8080`端口下

```
location ^~ /api/ {
   proxy_pass http://127.0.0.1:8080;
}
```

## `nginx`配置`react-router`

- `react-router`前端路由配置`nginx`

```
location / {
    try_files $uri $uri/ /index.html;
}
```