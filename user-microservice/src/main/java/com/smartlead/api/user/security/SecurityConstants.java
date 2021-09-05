package com.smartlead.api.user.security;

public class SecurityConstants {

    public static final String SECRET = "smartlead_secret";
    public static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 1 day
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";

    public static final String AUTH_URL = "/api/user/authenticate";
}