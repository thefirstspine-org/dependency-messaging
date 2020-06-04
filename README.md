
# 📦 dependency-messaging // @thefirstspine/messaging

Javascript and Typescript service to interact with the messaging net service.

More information here: <https://github.com/thefirstspine/messaging>

## Install

```bash
npm i @thefirstspine/messaging@latest
```

## Configuration

As part of TFS Platform, this dependency will use environment variable.

| Environement key | Summary |
|-|-|
| MESSAGING_URL | Messaging net service URL |
| MESSAGING_PUBLIC_KEY | Public key to interact with the messaging net service |

## Documentation

### MessagingService

Main service to interact with the messaging net service.

#### sendMessage

Sends a message in a subject to the clients connected to the service.

**Synopsis:** `async sendMessage(to: number[]|'*', subject: string|'*', message: any): Promise<IMessagingResponse>`

**Params:**

- `to: number[]|'*'` The list of the users that will receive the message. `*` is for all users.
- `subject: string|'*'` The subject concerned by the message.
- `message: any` The message to send.

#### getMessagingNetServiceUrl

Get the messaging net service URL according to the MESSAGING_URL environment variable.

**Synopsis:** `getMessagingNetServiceUrl(): string`

## How to use

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Publish on NPM

```bash
npm publish
```

## License

TFS Platform is NOT licensed. You are free to download, view, run the repository. You are NOT allowed to redistribute this project for both commercial and non-commercial use. Deal with it.
