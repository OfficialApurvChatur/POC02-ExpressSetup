import React from "react";
import { 
  Card, 
  CardTitle, 
  CardHeader, 
  CardDescription,
  CardContent, 
} from "@/aConnection/bShadcnConnection/components/ui/card";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/aConnection/bShadcnConnection/components/ui/alert"
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { getEnv } from "@/aConnection/cEnvironmentConnection";


const ENV = getEnv.ENV;
const MACHINE = getEnv.MACHINE;
const PORT = getEnv.PORT;
const APP_NAME = getEnv.APP_NAME;  

const ReactConnection = () => {
  // Render check
  console.log("ReactConnection")

  // JSX
  return (
    <React.Fragment>
      {/* ReactConnection */}

      <Alert className="w-4/5 border border-purple-400 m-4" >
        <AlertTitle>Shadcn Connection</AlertTitle>
        <AlertDescription>
          Shadcn connection created successfully...
        </AlertDescription>
        <AlertAction>
          <Button variant="default">Hello...</Button>
        </AlertAction>
      </Alert>
        <Card className="max-w-sm border border-amber-400 m-4" >
          <CardHeader>
            <CardTitle>React Connection</CardTitle>
            <CardDescription>React connection created successfully...</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <li>Environment: {ENV}</li>
              <li>Machine: {MACHINE}</li>
              <li>PORT: {PORT}</li>
              <li>App Name: {APP_NAME}</li>
            </ul>
          </CardContent>
        </Card>    

    </React.Fragment>
  )
}

export default ReactConnection;
