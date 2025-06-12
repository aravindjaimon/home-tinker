import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <>
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="inline-flex justify-center mb-4">
              <TriangleAlert className="h-12 w-12 text-destructive" />
            </div>
            <CardTitle className="text-3xl font-bold">
              404 - Not Found
            </CardTitle>
            <CardDescription className="text-muted-foreground pt-2">
              Oops! The page you're looking for could not be found.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground text-sm">
              It seems you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Go back to Homepage</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </>
  );
}
