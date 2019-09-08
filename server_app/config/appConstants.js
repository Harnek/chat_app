const STATUS_MSG = {
    ERROR: {
        TOKEN_EXPIRED: {
            statusCode:401,
            customMessage : 'Sorry, your account has been logged in other device! Please login again to continue.',
            type : 'TOKEN_ALREADY_EXPIRED'
        },
        BLOCKED: {
            statusCode:401,
            customMessage : 'This account is blocked by Admin. Please contact support team to activate your account.',
            type : 'BLOCKED'
        },
        END_DATE_SMALLER: {
            statusCode:400,
            customMessage : 'End Date should be grater or equal to start date.',
            type : 'END_DATE_SMALLER'
        },
        DB_ERROR: {
            statusCode:400,
            customMessage : 'DB Error : ',
            type : 'DB_ERROR'
        },
        INVALID_PASSWORD: {
            statusCode:400,
            customMessage : 'Password you have entered does not match.',
            type : 'INVALID_PASSWORD'
        },
        ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email address you have entered is already registered with us.',
            type : 'ALREADY_EXIST'
        },
        EMAIL_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email address you have entered is already exists.',
            type : 'ALREADY_EXIST'
        },
        SUPPLIER_ALREADY_EXIST: {
            statusCode:400,
            customMessage : 'Email address you have entered is already registered with supplier.',
            type : 'SUPPLIER_ALREADY_EXIST'
        },
        IMP_ERROR: {
            statusCode:500,
            customMessage : 'Implementation error',
            type : 'IMP_ERROR'
        },
        APP_ERROR: {
            statusCode:400,
            customMessage : 'Application Error',
            type : 'APP_ERROR'
        },
        INVALID_ID: {
            statusCode:400,
            customMessage : 'Invalid Id Provided : ',
            type : 'INVALID_ID'
        },
        INVALID_SUPPLIER: {
            statusCode:400,
            customMessage : 'This supplier is no longer exist.',
            type : 'INVALID_SUPPLIER'
        },
        INVALID_ADDRESS_ID: {
            statusCode:400,
            customMessage : 'Invalid addressId Provided.',
            type : 'INVALID_ADDRESS_ID'
        },
        INVALID_CARD_ID: {
            statusCode:400,
            customMessage : 'Invalid carId Provided : ',
            type : 'INVALID_CARD_ID'
        },
        INVALID_NUMBER_PLATE_ID: {
            statusCode:400,
            customMessage : 'Invalid numberPlateId Provided : ',
            type : 'INVALID_NUMBER_PLATE_ID'
        },
        NO_CHAUFFER_SERVICE: {
            statusCode:400,
            customMessage : 'Chauffer service is not exists.',
            type : 'NO_CHAUFFER_SERVICE'
        },
        NOTHING_TO_UPDATE: {
            statusCode:400,
            customMessage : 'Sorry you send nothing to update.',
            type : 'NOTHING_TO_UPDATE'
        },
        DUPLICATE: {
            statusCode:400,
            customMessage : 'Duplicate Entry',
            type : 'DUPLICATE'
        },
        INVALID_EMAIL: {
            statusCode:400,
            customMessage : 'The email address you have entered does not match.',
            type : 'INVALID_EMAIL'
        },
        INVALID_TOKEN: {
            statusCode:400,
            customMessage : 'The token you have entered does not match.',
            type : 'INVALID_TOKEN'
        },
        SOCIAL_LOGIN: {
            statusCode:400,
            customMessage : 'You are login with Google, hence not able to use this option.',
            type : 'SOCIAL_LOGIN'
        },
        TRIP_ERROR: {
            statusCode:400,
            customMessage : 'Please complete your existing trip.',
            type : 'TRIP_ERROR'
        },
},
    SUCCESS : {
        CREATED: {
            statusCode:200,
            customMessage : 'Created Successfully',
            type : 'CREATED'
        },
        DEFAULT: {
            statusCode:200,
            customMessage : 'Success',
            type : 'DEFAULT'
        },
        UPDATED: {
            statusCode:200,
            customMessage : 'Updated Successfully',
            type : 'UPDATED'
        },
        LOGOUT: {
            statusCode:200,
            customMessage : 'Logged Out Successfully',
            type : 'LOGOUT'
        },
        DELETED: {
            statusCode:200,
            customMessage : 'Deleted Successfully',
            type : 'DELETED'
        },
        REGISTER: {
            statusCode:200,
            customMessage : 'Register Successfully',
            type : 'REGISTER'
        }
    }
};

let APP_CONSTANTS = {
    STATUS_MSG: STATUS_MSG,
};

module.exports = APP_CONSTANTS;
