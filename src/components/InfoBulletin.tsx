
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

interface BulletinItem {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

const InfoBulletin: React.FC = () => {
  const { data: bulletinItems = [], isLoading, error } = useQuery({
    queryKey: ['bulletinItems'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bulletin_items')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error("Error fetching bulletin items:", error);
        return [];
      }
      return data || [];
    }
  });

  // Fallback data in case of error or empty data
  const hasBulletinItems = bulletinItems && bulletinItems.length > 0;

  return (
    <section className="py-12 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Latest Announcements</h2>
        
        {isLoading ? (
          <div className="flex justify-center py-6">
            <Loader2 className="h-8 w-8 animate-spin text-white" />
          </div>
        ) : (
          <div className="grid gap-4">
            {hasBulletinItems ? (
              bulletinItems.map((item: BulletinItem) => (
                <Card key={item.id} className="overflow-hidden border border-primary/10 bg-white/10 backdrop-blur-lg shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-blue-300">{item.title}</CardTitle>
                    <CardDescription className="text-sm text-sky-200">
                      {new Date(item.created_at).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-100">{item.content}</p>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="p-6 text-center bg-white/10 backdrop-blur-lg">
                <p className="text-white">No announcements at this time.</p>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoBulletin;
