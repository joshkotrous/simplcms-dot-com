"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MongoDBLogo,
  AWSS3Logo,
  VercelLogo,
  CloudinaryLogo,
  DynamoDBLogo,
} from "./logos";
import { Database, HardDrive, Server, UserCircle } from "lucide-react";
import { FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";

export default function IntegrationsSection() {
  return (
    <section className="container py-24 px-4 mx-auto">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">
          Built-in integrations for your favorite providers
        </h2>
        <p className="text-muted-foreground max-w-[700px]">
          Connect your application with the tools you already use and love.
        </p>
      </div>

      <Tabs defaultValue="data-store" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="data-store" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden sm:inline">Data Store</span>
          </TabsTrigger>
          <TabsTrigger
            value="media-storage"
            className="flex items-center gap-2"
          >
            <HardDrive className="h-4 w-4" />
            <span className="hidden sm:inline">Media Storage</span>
          </TabsTrigger>
          <TabsTrigger value="hosting" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            <span className="hidden sm:inline">Hosting</span>
          </TabsTrigger>
          <TabsTrigger value="auth" className="flex items-center gap-2">
            <UserCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Authentication</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="data-store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Solutions</CardTitle>
              <CardDescription>
                Connect to your preferred database providers
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <MongoDBLogo />
                </div>
                <span className="font-medium">MongoDB</span>
                <span className="text-sm text-muted-foreground text-center">
                  Document database with scalability and flexibility
                </span>
              </div>
              <div className="h-full flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  {/* Placeholder for another database logo */}
                  <DynamoDBLogo width={75} />
                </div>
                <span>Dynamo DB</span>
                <span className="text-sm text-muted-foreground text-center">
                  Serverless document storage on AWS
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media-storage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Media Storage Solutions</CardTitle>
              <CardDescription>
                Store and serve your media files
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <AWSS3Logo width={75} />
                </div>
                <span className="font-medium">AWS S3</span>
                <span className="text-sm text-muted-foreground text-center">
                  Scalable object storage for any amount of data
                </span>
              </div>
              <div className="h-full flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <CloudinaryLogo />
                </div>
                <span className="font-medium">Cloudinary</span>
                <span className="text-sm text-muted-foreground text-center">
                  Media optimization and delivery platform
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hosting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hosting Providers</CardTitle>
              <CardDescription>
                Deploy and host your applications
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <VercelLogo />
                </div>
                <span className="font-medium">Vercel</span>
                <span className="text-sm text-muted-foreground text-center">
                  Platform for frontend frameworks and static sites
                </span>
              </div>
              <div className="h-full flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  {/* Placeholder for another hosting provider logo */}
                  <Server className="h-12 w-12 text-primary" />
                </div>
                <span className="font-medium">Self hosted</span>
                <span className="text-sm text-muted-foreground text-center">
                  Host SimplCMS wherever you&apos;d like
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="auth" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Providers</CardTitle>
              <CardDescription>
                Secure user authentication methods
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  <FaGoogle className="h-12 w-12 text-primary" />
                </div>
                <span className="font-medium">Google</span>
                <span className="text-sm text-muted-foreground text-center">
                  OAuth authentication with Google
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  {/* Placeholder for another auth provider logo */}
                  <FaMicrosoft className="h-12 w-12 text-primary" />
                </div>
                <span className="font-medium">Microsoft</span>
                <span className="text-sm text-muted-foreground text-center">
                  OAuth authentication with Microsoft
                </span>
              </div>
              <div className="col-span-2 flex flex-col items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                <div className="h-16 flex items-center justify-center">
                  {/* Placeholder for another auth provider logo */}
                  <FaGithub className="h-12 w-12 text-primary" />
                </div>
                <span className="font-medium">GitHub</span>
                <span className="text-sm text-muted-foreground text-center">
                  OAuth authentication with GitHub
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
