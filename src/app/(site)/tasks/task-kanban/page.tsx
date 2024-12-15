import React from "react";
import TaskKanban from "@/components/Tasks/TaskKanban";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TaskHeader from "@/components/Tasks/TaskHeader";
import { structuredAlgoliaHtmlData } from "@/libs/crawlIndex";

export const metadata: Metadata = {
  title: "Next.js Task Kanban Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Task Kanban page for NextAdmin Dashboard Kit",
  // other metadata
};

const TaskKanbanPage = async () => {
  await structuredAlgoliaHtmlData({
    pageUrl: `${process.env.SITE_URL}tasks/task-kanban`,
    htmlString: "",
    title: "Next.js Task Kanban Page",
    type: "page",
    imageURL: "",
  });

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-5xl">
        <Breadcrumb pageName="Task Kanban" />

        <TaskHeader />
        <TaskKanban />
      </div>
    </DefaultLayout>
  );
};

export default TaskKanbanPage;
