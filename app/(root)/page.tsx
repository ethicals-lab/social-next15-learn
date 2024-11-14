import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {ROUTES} from "@/constants/routes";


export default async function Home() {
  const session = await auth();
  console.log(session);

  return (<>    <h1 className="h1-bold">
      NextJS Social Applicaiton and Meetup...{" "}
    </h1>
    <form className="mt-40 flex items-center justify-center"  action={async() => {
          "use server";
          await signOut({ redirectTo: ROUTES.LOGIN });
        }}
    >
      <Button type="submit">Logout</Button>
    </form>
    </>

  );
}
