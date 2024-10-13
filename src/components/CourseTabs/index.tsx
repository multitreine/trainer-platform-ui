import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CourseTabs = ({ details }: any) => {
  const tabs = details?.tabs || [];

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <Tabs defaultValue={tabs.length > 0 ? tabs[0].nameTab : "default"}>
        <div className="overflow-x-auto scrollbar-hide">
          <TabsList className="w-max flex space-x-4">
            {tabs?.map((tab: any) => (
              <TabsTrigger key={tab.nameTab} value={tab.nameTab}>
                {tab.nameTab}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {tabs?.map((tab: any) => (
            <TabsContent key={tab.nameTab} value={tab.nameTab}>
              {tab.content.map((contentItem: any, index: number) => (
                <div key={index} className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">
                    {contentItem.title}
                  </h2>
                  <p className="text-gray-600">{contentItem.description}</p>
                </div>
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export { CourseTabs };
