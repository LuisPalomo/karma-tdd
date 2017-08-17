import { RemoteService } from './remote.service';

export class HelloService {

    constructor(
        private remoteService: RemoteService
    ) {}

    sayHello(): string {
        return 'Hello world!';
    }
    sayBye(n1: number, n2: number): string {
        return 'Sayonara baby ' + this.remoteService.sum(n1, n2);
    }
}