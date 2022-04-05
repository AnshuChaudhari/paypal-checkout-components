/* @flow */

import { setupSDK } from '@paypal/sdk-client/src';

import * as paypalButtons from './src/interface/button'; // eslint-disable-line import/no-namespace
import * as paypalMarks from './src/interface/marks';
import * as paypalFields from "./src/interface/fields";
import * as paypalPaymentFields from "./src/interface/payment-fields"; // eslint-disable-line import/no-namespace

setupSDK([
    {
        name:     'buttons',
        requirer: () => paypalButtons
    },
    {
        name:     'marks',
        requirer: () => paypalMarks
    },
    {
        name:     'paypal-fields',
        requirer: () => ({ ...paypalFields, ...paypalPaymentFields })
    }
]);
