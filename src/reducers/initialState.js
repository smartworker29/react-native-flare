import Immutable from 'seamless-immutable';

// eslint-disable-next-line
export const initialState = Immutable({
    nav: {
        root: 'insecure', // 'insecure' / 'secure',
    },
    user: {
        token: null,
        profile: {},
        crews: [],
        devices: [],
    },
    beacons: {
        latest: null,
        recent: [],
    },
});