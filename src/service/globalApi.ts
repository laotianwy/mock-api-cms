/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateMockDto {
  /** 项目名字 */
  projectName: string;
  /** 接口url */
  apiUrl: string;
  /** 接口方法 */
  apiMethod: string;
  /** 接口的查询参数 */
  query: string;
  /** 根据swagger获取到的mock信息 */
  responseToTockStructData: string;
}

export interface CreateMockListDto {
  /** 列表数据 */
  list: CreateMockDto[];
}

export interface ResponseModelDto {
  /** @example "项目名称" */
  name: string;
  /** @example "模型数据" */
  modelData: string;
}

export interface ResponseModel {
  data: object;
  /** @default 200 */
  code: number;
  /** @default "success" */
  message: string;
}

export interface UserEntity {
  /** 账号 */
  username: string;
  /** 密码 */
  password: string;
  /** 角色权限 */
  role: string;
  /** 昵称 */
  nick_name: string;
  /** 头像 */
  avator: string;
  /** 性别 */
  sex: string;
  /** 创建时间 */
  create_at: string;
  /** 更新时间 */
  update_at: string;
  /** 删除时间 */
  delete_at: string;
}

export interface CreateUserDto {
  /**
   * 账号
   * @default "账号"
   */
  username: string;
  /**
   * 密码
   * @default "密码"
   */
  password: string;
  /**
   * @default "USER"
   * @example "角色 USER|ADMIN"
   */
  role: string | null;
  /** @example "昵称" */
  nick_name: string;
  /** @example "头像" */
  avator: string;
  /** @example "UNKNOW" */
  sex: string;
}

export interface LoginUserDTO {
  /**
   * 账号
   * @default "账号"
   */
  username: string;
  /**
   * 密码
   * @default "密码"
   */
  password: string;
  /**
   * 验证码
   * @default "验证码"
   */
  captcha: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title Mock API
 * @version 1.0
 * @contact
 *
 * The Mock API description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  mock = {
    /**
     * No description
     *
     * @tags User
     * @name UserLogin
     * @request POST:/mock/user/login
     */
    userLogin: (data: LoginUserDTO, params: RequestParams = {}) =>
      this.request<
        ResponseModel & {
          data?: string;
        },
        any
      >({
        path: `/mock/user/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserGetCaptcha
     * @request GET:/mock/user/getCaptcha
     */
    userGetCaptcha: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/mock/user/getCaptcha`,
        method: "GET",
        format: "blob",
        ...params,
      }),
  };
}
