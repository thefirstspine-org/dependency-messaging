import fetch, { Response } from 'node-fetch';

/**
 * Service to interact with the messaging net service.
 */
export class MessagingService {

  /**
   * Default Messaging net service URL.
   */
  static readonly MESSAGING_URL_DEFAULT: string = 'https://messaging.thefirstspine.fr'

  /**
   * Sends a message in a subject to the clients connected to the service.
   * @param to The list of the users that will receive the message. `*` is for all users.
   * @param subject The subject concerned by the message.
   * @param message The message to send.
   */
  async sendMessage(to: number[]|'*', subject: string|'*', message: any): Promise<IMessagingResponse> {
    const response: Response = await fetch(this.getMessagingNetServiceUrl() + '/api', {
      body: JSON.stringify({
        to,
        subject,
        message,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Cert': Buffer.from(process.env.MESSAGING_PUBLIC_KEY.replace(/\\n/gm, '\n')).toString('base64'),
      },
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  /**
   * Get the messaging net service URL according to the MESSAGING_URL environment variable.
   */
  getMessagingNetServiceUrl(): string {
    return process.env?.MESSAGING_URL?.length > 0 ? process.env.MESSAGING_URL : MessagingService.MESSAGING_URL_DEFAULT;
  }

}

/**
 * A response from the messaging service
 */
export interface IMessagingResponse {
  sent: boolean;
  error?: string;
}

export default new MessagingService();
