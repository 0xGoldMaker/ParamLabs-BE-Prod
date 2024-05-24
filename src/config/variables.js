const ENV = process.env.NODE_ENV || 'local';

/** @type {{[key: string]: { log?: boolean; name: string; defaultValue?: string; group?: string, type?: 'boolean' | 'string' | 'number' } }} */
module.exports = {
  /**
   * App
   */
  PORT: {
    name: 'Port',
    defaultValue: 3000,
  },
  HOST: {
    name: 'Host',
    defaultValue: '0.0.0.0',
  },
  API_EXCLUDES: {
    name: 'Enable API Excludes',
    defaultValue: true,
    type: 'boolean',
  },
  CORS_ENABLED: {
    name: 'Enabled',
    group: 'CORS',
    defaultValue: false,
    type: 'boolean',
  },
  IMX_BASE_URL: {
    name: 'Base URL',
    group: 'IMX',
    defaultValue: 'https://api.x.immutable.com',
  },
  IMX_COLLECTIONS: {
    name: 'Collections',
    group: 'IMX',
    defaultValue: '0xe2c921ed59f5a4011b4ffc6a4747015dcb5b804f',
  },
  RECAPTCHA_ENABLED: {
    name: 'Enable',
    group: 'Recaptcha',
    defaultValue: false,
    type: 'boolean',
  },
  RECAPTCHA_SECRET_KEY: {
    name: 'Secret Key',
    group: 'Recaptcha',
    defaultValue: 'RECAPTCHA_SECRET_KEY',
  },
  RECAPTCHA_MIN_SCORE: {
    name: 'Min Score',
    group: 'Recaptcha',
    defaultValue: 0.5,
    type: 'number',
  },
  SECURITY_CODE_LENGTH: {
    name: 'Code Length',
    group: 'Security',
    defaultValue: 6,
    type: 'number',
  },
  SECURITY_CODE_DELAY: {
    name: 'Verification Delay',
    group: 'Security',
    defaultValue: 30000, // 30s
    type: 'number',
  },
  SECURITY_TRY_DELAY: {
    name: 'Retry Delay',
    group: 'Security',
    defaultValue: 5000, // 5s
    type: 'number',
  },
  SECURITY_CODE_TTL: {
    name: 'Verification Delay',
    group: 'Security',
    defaultValue: 7200000, // 2h
    type: 'number',
  },
  SECURITY_MAX_TRIES: {
    name: 'Max Tries',
    group: 'Security',
    defaultValue: 5,
    type: 'number',
  },
  SECURITY_MAX_SENDS: {
    name: 'Max Resends',
    group: 'Security',
    defaultValue: 5,
    type: 'number',
  },
  CORS_ORIGIN: {
    name: 'Origin',
    log: false,
    group: 'CORS',
    defaultValue: 'https://www.paramlabs.io,https://www.kiraverse.game',
  },
  PUBLIC_URL: {
    name: 'Public URL',
    defaultValue: `http://localhost:${process.env.PORT || 3000}`,
  },
  SWAGGER_SERVERS: {
    name: 'Swagger Servers',
    defaultValue: `http://localhost:${
      process.env.PORT || 3000
    },https://api.kiraverse.game,https://kira.gamestoplauncher.io`,
  },
  MORGAN_ENABLE: {
    name: 'Enable Morgan logging',
    defaultValue: false,
    type: 'boolean',
  },
  API_PREFIX: {
    name: 'API Prefix',
    log: false,
    defaultValue: '/api/v1',
  },
  /**
   * ParamLabs
   */
  PARAMLABS_BASE_URL: {
    name: 'ParamLabs',
    defaultValue: 'http://localhost:8009',
  },
  PARAMLABS_API_KEY: {
    name: 'ParamLabs',
    log: false,
    defaultValue: 'PARAMLABS_API_KEY',
  },
  /**
   * MongoDB
   */
  MONGODB_URL: {
    name: 'URI',
    group: 'MongoDB',
    defaultValue: `mongodb://127.0.0.1:27017/app-${ENV}`,
  },
  MONGODB_AUTHSOURCE: {
    name: 'Auth. DB',
    log: false,
    defaultValue: 'admin',
    group: 'MongoDB',
  },
  MONGODB_USERNAME: {
    name: 'Username',
    log: false,
    group: 'MongoDB',
    defaultValue: '',
  },
  MONGODB_PASSWORD: {
    name: 'Password',
    log: false,
    group: 'MongoDB',
    defaultValue: '',
  },
  MONGODB_IS_TLS: {
    name: 'Enable TLS',
    log: false,
    group: 'MongoDB',
    defaultValue: false,
    type: 'boolean',
  },
  MONGODB_TLS_KEY: {
    name: 'TLS Certificate Key',
    log: false,
    group: 'MongoDB',
    defaultValue: 'certs/mongodb.pem',
  },
  MONGODB_TLS_INSECURE: {
    name: 'Insecure TLS',
    log: false,
    group: 'MongoDB',
    description: 'Relax TLS constraints, disabling validation',
    defaultValue: false,
    type: 'boolean',
  },
  MONGODB_DEBUG: {
    name: 'Debug Mode',
    log: false,
    group: 'MongoDB',
    defaultValue: false,
    type: 'boolean',
  },
  /**
   * Postgres DB
   */
  POSTGRES_DB: {
    name: 'Database',
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_HOST: {
    name: 'Host',
    group: 'Postgres',
    defaultValue: '127.0.0.1',
  },
  POSTGRES_PORT: {
    name: 'Port',
    group: 'Postgres',
    defaultValue: 5432,
  },
  POSTGRES_USER: {
    name: 'Username',
    log: false,
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_PASSWORD: {
    name: 'Password',
    log: false,
    group: 'Postgres',
    defaultValue: 'postgres',
  },
  POSTGRES_LOGGING: {
    name: 'Logging',
    log: false,
    group: 'Postgres',
    defaultValue: false,
    type: 'boolean',
  },
  POSTGRES_POOL_MAX: {
    name: 'Pool Max',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 5,
  },
  POSTGRES_POOL_MIN: {
    name: 'Pool Min',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 0,
  },
  POSTGRES_POOL_ACQUIRE: {
    name: 'Pool Acquire',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 30000,
  },
  POSTGRES_POOL_IDLE: {
    name: 'Pool IDLE',
    log: false,
    group: 'Postgres',
    type: 'number',
    defaultValue: 10000,
  },
  POSTGRES_SSL: {
    name: 'SSL Required',
    log: false,
    group: 'Postgres',
    type: 'boolean',
    defaultValue: false,
  },
  /**
   * SendGrid
   */
  SENDGRID_API_KEY: {
    name: 'SendGrid API Key',
    log: false,
    group: 'Mailer',
  },
  SENDGRID_FROM: {
    name: 'From',
    group: 'Mailer',
    defaultValue: 'noreply@paramlabs.io',
  },
  /**
   * AWS S3
   */
  AWS_S3_DOMAIN: {
    name: 'Domain',
    log: false,
    group: 'AWS',
    defaultValue: '',
  },
  AWS_S3_REGION: {
    name: 'Region',
    log: false,
    group: 'AWS',
    defaultValue: 'us-east-1',
  },
  AWS_S3_BUCKET_NAME: {
    name: 'Bucket Name',
    log: false,
    group: 'AWS',
    defaultValue: '',
  },
  AWS_S3_ACCESS_KEY_ID: {
    name: 'Access ID',
    log: false,
    group: 'AWS',
    defaultValue: '',
  },
  AWS_S3_SECRET_ACCESS_KEY: {
    name: 'Secret Key',
    log: false,
    group: 'AWS',
    defaultValue: '',
  },
  /**
   * JWT
   */
  JWT_ISSUER: {
    name: 'Issuer',
    log: false,
    group: 'JWT',
    defaultValue: 'https://api.paramlabs.io',
  },
  JWT_AUDIENCE: {
    name: 'Audience',
    log: false,
    group: 'JWT',
    defaultValue: 'api.paramlabs.io,api.kiraverse.game',
  },
  JWT_EXPIRATION: {
    name: 'Expiration',
    log: false,
    group: 'JWT',
    defaultValue: 2592000, // 30 days
    type: 'number',
  },
  JWT_PUBLIC_KEY: {
    name: 'Private Key',
    log: false,
    group: 'JWT',
    defaultValue: 'certs/es512-public.pem',
  },
  JWT_PRIVATE_KEY: {
    name: 'Private Key',
    log: false,
    group: 'JWT',
    defaultValue: 'certs/es512-private.pem',
  },
};
