import { HelloComponent } from '../components/hello.component';
import { MockHelloService } from './mocks/hello.service.mock.spec';

describe('Hello component', () => {
    let mockHelloService: any, helloComponent: any, spies: any;

    beforeAll(() => {
        mockHelloService = new MockHelloService();
        helloComponent = new HelloComponent(mockHelloService);

        initSpies();
    });

    it('should service is not undefined when constructor is called', () => {
        expect(helloComponent.helloService).toBeDefined();
    });

    it('should return "Hello world!" when method sayHello is called', () => {
        spies.helloService.sayHello.and.callFake(() => 'Hello world!');

        expect(helloComponent.sayHello()).toEqual('Hello world!');
    });

    it('should return "Sayonara baby 10", when method sayBye is called with parameters 5, 5', () => {
        spies.helloService.sayBye.and.callFake(() => 'Sayonara baby 10');

        expect(helloComponent.sayBye(5, 5)).toEqual('Sayonara baby 10');
    });

    function initSpies() {
        spies = {
            helloService: {
                sayHello: spyOn(mockHelloService, 'sayHello'),
                sayBye: spyOn(mockHelloService, 'sayBye')
            }
        };
    }

});