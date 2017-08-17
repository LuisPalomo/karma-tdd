import { HelloService } from '../services/hello.service';
import { MockRemoteService } from './mocks/remote.service.mock.spec';

describe('Hello service', () => {
    let helloService: any, mockRemoteService: any, spies: any;

    beforeAll(() => {
        mockRemoteService = new MockRemoteService();
        helloService = new HelloService(mockRemoteService);

        initSpies();
    });

    it('should return "Hello world" when method sayHello is called', () => {
        expect(helloService.sayHello()).toEqual('Hello world!');
    });

    it('should return "Sayonara baby 10" when method sayBye is called with parameters 5, 5', () => {
        spies.remoteService.sum.and.callFake(() => 10);

        expect(helloService.sayBye(5, 5)).toEqual('Sayonara baby 10');
    });

    function initSpies() {
        spies = {
            remoteService: {
                sum: spyOn(mockRemoteService, 'sum')
            }
        };
    }

});