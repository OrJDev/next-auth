// @refresh reload
import "./root.css"
import { Suspense } from "solid-js"
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start"
import { NavBar } from "./components"
import { SessionProvider } from "@auth/solid-start/client"

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Create JD App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <SessionProvider>
          <Suspense>
            <NavBar />
            <div class="py-44 px-8">
              <ErrorBoundary>
                <Routes>
                  <FileRoutes />
                </Routes>
              </ErrorBoundary>
            </div>
          </Suspense>
        </SessionProvider>
        <Scripts />
      </Body>
    </Html>
  )
}
