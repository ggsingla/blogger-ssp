/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:07cbee4e-de4a-454e-942b-8b93823447ac",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_NZH1IwAVg",
    "aws_user_pools_web_client_id": "5viqdet82p2rm9lu1m8apk8gou",
    "oauth": {
        "domain": "ssp-blogger-dev.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/signin/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_cloud_logic_custom": [
        {
            "name": "api12b9a229",
            "endpoint": "https://kiewiyza43.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        },
        {
            "name": "getBlog",
            "endpoint": "https://rl3kwfa07d.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        },
        {
            "name": "finalTest",
            "endpoint": "https://y8w4enfpt8.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        },
        {
            "name": "getAllblogs",
            "endpoint": "https://204ryn98f1.execute-api.ap-south-1.amazonaws.com/dev",
            "region": "ap-south-1"
        }
    ],
    "aws_dynamodb_all_tables_region": "ap-south-1",
    "aws_dynamodb_table_schemas": [
        {
            "tableName": "Blogs-dev",
            "region": "ap-south-1"
        }
    ]
};


export default awsmobile;
