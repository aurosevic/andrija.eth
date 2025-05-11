Website hosted on the Ethereum Name Service(ENS) and Inter Planetary File System(IPFS).

So far, You can access the website <a href="ipfs://bafybeianw7zcyzxsnlofgwtbo6s7yrnbc2v5vboord5djdj5nzr266cq2q" target="_blank">andrija.eth</a> through the Brave browser.

## Uploading to IPFS
### Run the IPFS Daemon
```zsh
ipfs daemon
```

### Build the application
```zsh
npm run build
```

#### Check if the built application is running properly
```zsh
serve -s build
```

### Upload the build folder to IPFS
```zsh
ipfs add -r build
```

### Test the IPFS link
#### In the browser
https://ipfs.io/ipfs/YOUR_CID

#### IPFS Tool
https://check.ipfs.network/