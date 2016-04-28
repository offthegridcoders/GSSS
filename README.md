# Granite State Snowshoe Series

### Setup
```sh
npm install
[sudo] gem install scss_lint
```

### Development
```sh
gulp
```

### Building
```sh
gulp make
```

### Deploy
```sh
git subtree push --prefix=dist origin gh-pages
```

if error non fast-forward use --force (with caution)
```sh
git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force
```
#### Contact
> Please feel free to contact me with any questions, or if you would like to help make this project better!
> @theWickedWebDev - Twitter
