"use client"

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'

import loadStytch from "lib/loadStytch";

import { useEffect } from "react";
import { useStytchUser } from "@stytch/nextjs";

import { redirect } from 'next/navigation'

export default function IndexPage() {
  const id = nanoid()
  const { user, isInitialized } = useStytchUser();

  // If the Stytch SDK detects a User then redirect to profile; for example if a logged in User navigated directly to this URL.
  useEffect(() => {
    if (! isInitialized || ! user) {
      redirect("/sign-in");
    }
  }, [user, isInitialized]);

  return <Chat id={id} />
}