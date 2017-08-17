import { HelloService } from "../services/hello.service";

export class HelloComponent {
    constructor(
        private helloService: HelloService
    ) { }

    sayHello(): string {
       return this.helloService.sayHello();
    }

    sayBye(n1: number, n2: number): string {
        return this.helloService.sayBye(n1, n2);
    }
}