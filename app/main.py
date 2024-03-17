"""
This module is the main module for the FastAPI app.
"""

# --------------------------------------------------------------------------------
# Imports
# --------------------------------------------------------------------------------

from fastapi import FastAPI
from app.routers import api, login, reminders


# --------------------------------------------------------------------------------
# App Creation
# --------------------------------------------------------------------------------

app = FastAPI()
app.include_router(api.router)
app.include_router(login.router)
app.include_router(reminders.router)


# --------------------------------------------------------------------------------
# Routes
# --------------------------------------------------------------------------------


@app.get("/")
def read_root():
  return {"Hello": "World"}