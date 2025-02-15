import { Api as GlobalApi } from './globalApi';
import {
    serviceConfig,
    serviceConfigProps,
} from '../config/request/swaggerServiceConfig';

export interface warpperServiceConfigProps {
    name: string;
    basePath: string;
}

export const Api = {
    GlobalApi,
};

const warpperServiceConfig = (
    apiConfig: serviceConfigProps,
    ctx: warpperServiceConfigProps,
) => {
    const newConfig = { ...apiConfig };
    if (newConfig.baseURL) {
        newConfig.baseURL = newConfig.baseURL + ctx.basePath;
    }
    return newConfig;
};

const globalApi = new GlobalApi(
    warpperServiceConfig(serviceConfig, { name: 'globalApi', basePath: '' }),
);

export const apiInstanceList = [{ key: 'globalApi', instance: globalApi }];

export const api = {
    globalApi,
};
