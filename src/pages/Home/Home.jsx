import { Octokit } from "@octokit/core";
import { createElement as h, useState, useCallback } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Link,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ROWS_PER_PAGE = 10;

function Home() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [issues, setIssues] = useState([]);
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(ROWS_PER_PAGE);
  const [issueFilter, setIssueFilter] = useState("all");
  const [prFilter, setPrFilter] = useState("all");

  const fetchData = useCallback(async () => {
    if (!username || !token) return;

    setLoading(true);
    setError("");

    try {
      const octokit = new Octokit({ auth: token });

      const fetchAll = async (url, params) => {
        let page = 1;
        let results = [];
        let hasMore = true;

        while (hasMore) {
          const response = await octokit.request(url, { ...params, page });
          results = results.concat(response.data.items);
          hasMore = response.data.items.length === 100;
          page++;
        }
        return results;
      };

      const issuesResponse = await fetchAll("GET /search/issues", {
        q: `author:${username} is:issue`,
        sort: "created",
        order: "desc",
        per_page: 100,
      });

      const prsResponse = await fetchAll("GET /search/issues", {
        q: `author:${username} is:pr`,
        sort: "created",
        order: "desc",
        per_page: 100,
      });

      setIssues(issuesResponse);
      setPrs(prsResponse);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [username, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  const filterData = (data, filterType) => {
    switch (filterType) {
      case "open":
        return data.filter((item) => item.state === "open");
      case "closed":
        return data.filter(
          (item) => item.state === "closed" && !item.pull_request?.merged_at
        );
      case "merged":
        return data.filter((item) => item.pull_request?.merged_at);
      default:
        return data;
    }
  };

  const currentData =
    tab === 0 ? filterData(issues, issueFilter) : filterData(prs, prFilter);
  const displayData = currentData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return h(
    Container,
    {
      maxWidth: "lg",
      sx: {
        display: "flex",
        flexDirection: "column",
        minHeight: "78vh",
        mt: 4,
      },
    },
    [
      h(Paper, { elevation: 1, sx: { p: 2, mb: 4 } }, [
        h(
          Typography,
          { variant: "h4", component: "h1", gutterBottom: true },
          "GitHub Issues and Pull Requests"
        ),
        h("form", { onSubmit: handleSubmit }, [
          h(Box, { sx: { display: "flex", gap: 2 } }, [
            h(TextField, {
              label: "GitHub Username",
              value: username,
              onChange: (e) => setUsername(e.target.value),
              required: true,
              sx: { flex: 1 },
            }),
            h(TextField, {
              label: "Personal Access Token",
              value: token,
              onChange: (e) => setToken(e.target.value),
              type: "password",
              required: true,
              sx: { flex: 1 },
            }),
            h(
              Button,
              {
                type: "submit",
                variant: "contained",
                sx: { minWidth: "120px" },
                disabled: loading,
              },
              "Fetch Data"
            ),
          ]),
        ]),
      ]),

      error && h(Alert, { severity: "error", sx: { mb: 3 } }, error),

      h(Box, { sx: { position: "relative" } }, [
        loading &&
          h(
            Box,
            {
              sx: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            },
            h(CircularProgress)
          ),

        h(
          Box,
          {
            sx: {
              maxHeight: "400px",
              overflowY: "auto",
              display: loading ? "none" : "block",
            },
          },
          [
            h(TableContainer, { component: Paper }, [
              h(Table, null, [
                h(
                  TableHead,
                  null,
                  h(TableRow, null, [
                    h(TableCell, { sx: { textAlign: "left" } }, "Title"),
                    h(TableCell, { sx: { textAlign: "center" } }, "Repository"),
                    h(TableCell, { sx: { textAlign: "center" } }, "State"),
                    h(TableCell, { sx: { textAlign: "left" } }, "Created"),
                  ])
                ),
                h(
                  TableBody,
                  null,
                  displayData.map((item, i) =>
                    h(TableRow, { key: i }, [
                      h(
                        TableCell,
                        null,
                        h(
                          Link,
                          {
                            href: item.html_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          item.title
                        )
                      ),
                      h(
                        TableCell,
                        { sx: { textAlign: "center" } },
                        item.repository_url.split("/").pop()
                      ),
                      h(TableCell, { sx: { textAlign: "center" } }, item.state),
                      h(TableCell, null, formatDate(item.created_at)),
                    ])
                  )
                ),
              ]),
            ]),
          ]
        ),
        h(TablePagination, {
          component: "div",
          count: currentData.length,
          page,
          onPageChange: handleChangePage,
          rowsPerPage,
          rowsPerPageOptions: [],
        }),
      ]),
    ]
  );
}

export default Home;
