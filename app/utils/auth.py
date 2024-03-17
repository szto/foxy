
"""
This module provides security and authentication.
"""
from typing import Optional

# --------------------------------------------------------------------------------
# Imports
# --------------------------------------------------------------------------------

import jwt
import secrets

from app import users, secret_key
from app.utils.exceptions import UnauthorizedException
from fastapi import Cookie, Form, Depends
from fastapi.security import HTTPBasic
from pydantic import BaseModel


# --------------------------------------------------------------------------------
# Globals
# --------------------------------------------------------------------------------

basic_auth = HTTPBasic(auto_error=False)
auth_cookie_name = "reminders_session"


# --------------------------------------------------------------------------------
# Models
# --------------------------------------------------------------------------------

class AuthCookie(BaseModel):
  name: str
  token: str
  username: str


# --------------------------------------------------------------------------------
# Serializers
# --------------------------------------------------------------------------------

def serialize_token(username: str) -> str:
  return jwt.encode({"username": username}, secret_key, algorithm="HS256")


def deserialize_token(token: str) -> str:
  try:
    data = jwt.decode(token, secret_key, algorithms=["HS256"])
    return data['username']
  except:
    return None


# --------------------------------------------------------------------------------
# Authentication Checkers
# --------------------------------------------------------------------------------

def get_login_form_creds(username: str = Form(), password: str = Form()) -> Optional[AuthCookie]:
    cookie = None
    if username in users:
        if secrets.compare_digest(password, users[username]):
            token = serialize_token(username)
            cookie = AuthCookie(
              name=auth_cookie_name,
              username=username,
              token=token
            )
    return cookie


def get_auth_cookie(reminders_session: str | None = Cookie(default=None)) -> AuthCookie:
    cookie = None
    if reminders_session:
        username = deserialize_token(reminders_session)
        if username and username in users:
            cookie = AuthCookie(
                name=auth_cookie_name,
                username=username,
                token=reminders_session
            )
    return cookie


def get_auth_cookie_username(cookie: Optional[AuthCookie] = Depends(get_auth_cookie)) -> str:
  if not cookie:
    raise UnauthorizedException()

  return cookie.username