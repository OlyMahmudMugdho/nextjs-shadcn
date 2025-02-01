"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export default page