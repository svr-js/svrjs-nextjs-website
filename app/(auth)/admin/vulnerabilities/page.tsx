"use client";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { vulnerabilitiesSchema } from "@/lib/validations/validation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";

interface VulnerabiltyEntry {
  _id: string;
  version: string;
  bullets: { point: string }[];
}

type VulnerabiltiesForm = z.infer<typeof vulnerabilitiesSchema>;

const AdminLogPage = () => {
  const [logs, setLogs] = useState<VulnerabiltyEntry[]>([]);
  const [error, setError] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<VulnerabiltiesForm>({
    resolver: zodResolver(vulnerabilitiesSchema),
    defaultValues: {
      version: "",
      bullets: [{ point: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "bullets"
  });

  const fetchLogs = async () => {
    try {
      const response = await fetch("/api/vulnerabilities", { method: "GET" });
      if (response.ok) {
        const data: VulnerabiltyEntry[] = await response.json();
        setLogs(data);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error: any) {
      setError(error.message || "Failed to fetch logs");
    }
  };

  const onSubmit: SubmitHandler<VulnerabiltiesForm> = async (data) => {
    setLoading(true);
    const response = await fetch("/api/uploadvulnerabilities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.reset();
      fetchLogs();
      setLoading(false);
      toast({ description: "Logs successfully added" });
    } else {
      setLoading(false);
      toast({ description: "Upload Failed", variant: "destructive" });
    }
  };

  const deleteLog = async (id: string) => {
    try {
      const response = await fetch(`/api/delete/vulnerability/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        fetchLogs();
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error: any) {
      setError(error.message || "Failed to delete log");
    }
  };

  useEffect(() => {
    fetchLogs();
    const interval = setInterval(() => {
      fetchLogs();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="logs-page" className="wrapper container">
      <h1 className="text-3xl font-bold py-6">Server Vulnerabilties Form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="version"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Version Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {fields.map((field, index) => (
            <FormField
              key={field.id}
              control={form.control}
              name={`bullets.${index}.point`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Point {index + 1}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                  <Button
                    type="button"
                    className="mt-2"
                    variant={"secondary"}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            className="mb-4"
            size={"icon"}
            variant={"outline"}
            onClick={() => append({ point: "" })}
          >
            +
          </Button>
          <Button
            type="submit"
            className="w-full text-lg rounded-full"
            disabled={loading}
            size={"lg"}
          >
            Submit
          </Button>
        </form>
      </Form>

      {/* Section to list and delete logs */}
      <section id="logs-list" className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">
          Existing Vulnerabilties
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <Table className="w-full mt-4 border-muted">
          <TableHeader>
            <TableRow>
              <TableHead className="border-b px-4 py-2">Version</TableHead>
              <TableHead className="border-b px-4 py-2">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs
              .slice()
              .reverse()
              .map((log) => (
                <TableRow key={log._id}>
                  <TableCell className="border-b px-4 py-2">
                    {log.version}
                  </TableCell>
                  <TableCell className="border-b px-4 py-2">
                    <Button
                      variant={"destructive"}
                      onClick={() => deleteLog(log._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </section>
    </section>
  );
};

export default AdminLogPage;
