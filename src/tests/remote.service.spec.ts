import { RemoteService } from '../services/remote.service';

describe('Remote service', () => {

    let remoteService: any;

    beforeAll(() => {
        remoteService = new RemoteService();
    });

    it('should return 10 when sum method is called with parameters 5, 5', () => {
        expect(remoteService.sum(5, 5)).toEqual(10);
    });
});