import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center px-20 bg-zinc-950 border-r border-zinc-800 text-white">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            SEO Brain Pro
          </h1>

          <p className="text-zinc-400 text-lg mb-10">
            Internal SEO Platform for Physics Wallah
          </p>

          <div className="space-y-4 text-zinc-300">
            <div>✓ Page Traffic</div>
            <div>✓ SEO Brain</div>
            <div>✓ Category Monitor</div>
            <div>✓ Weekly Reports</div>
            <div>✓ GA4 Analytics</div>
            <div>✓ GMB Tools</div>
            <div>✓ PageSpeed Insights</div>
            <div>✓ URL Inspection</div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6 bg-black">
        <Card className="w-full max-w-md bg-zinc-950 border-zinc-800 text-white">

          <CardHeader>
            <CardTitle className="text-3xl">
              Sign In
            </CardTitle>

            <CardDescription>
              Login to SEO Brain Pro
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-5">

            <div className="space-y-2">
              <label>Email</label>
              <Input placeholder="name@pw.live" />
            </div>

            <div className="space-y-2">
              <label>Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <Button className="w-full">
              Sign In
            </Button>

          </CardContent>

        </Card>
      </div>

    </div>
  );
}