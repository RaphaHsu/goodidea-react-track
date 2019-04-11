import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
      initialPage: 1,
      previousPage: 1
    };
  }

  setPagingAction = (action) => {
    const {onChangeAction} = this.props;
    onChangeAction(action);
  }

  setPage = (page) => {
    const {books, onChangePage} = this.props;
    const {previousPage} = this.state;
    let {pager} = this.state;

    pager = this.getPager(books.length, page);
    if (previousPage < page) {
      this.setPagingAction('backward');
    } else {
      this.setPagingAction('forward');
    }
    this.setState({
      pager,
      previousPage: page
    });

    if (page < 1 || page > pager.totalPages) {
      onChangePage([]);
      return;
    }

    const pageOfItems = books.slice(pager.startIndex, pager.endIndex + 1);
    onChangePage(pageOfItems);
  }

  getPager = (totalItems, currentPage) => {
    currentPage = currentPage || 1;
    const pageSize = 10;

    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage = 0;
    let endPage = 0;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min((startIndex + pageSize) - 1, totalItems - 1);
    const range = (start, end) => (
      Array.from(Array(end - start).keys()).map(i => i + start)
    );
    const pages = range(startPage, endPage + 1);
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  }

  componentDidUpdate(prevProps) {
    const {books} = this.props;
    const {initialPage} = this.state;
    if (books !== prevProps.books) {
      this.setPage(initialPage);
    }
  }

  render() {
    const {pager} = this.state;
    if (!pager.pages || pager.pages.length === 0) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="paging-block">
          <ul>
            <li>
              <button type="button" onClick={() => { this.setPage(1); this.setPagingAction('forward'); }} disabled={pager.currentPage === 1 ? true : null}>
                <i className="fas fa-angle-double-left" />
              </button>
            </li>
            <li>
              <button type="button" onClick={() => { this.setPage(pager.currentPage - 1); this.setPagingAction('forward'); }} disabled={pager.currentPage === 1 ? true : null}>
                <i className="fas fa-chevron-left" />
              </button>
            </li>
            {pager.pages.map(page => (
              <li key={page} active={pager.currentPage === page ? "true" : null}>
                <button type="button" onClick={() => { this.setPage(page); }}>
                  {page}
                </button>
              </li>
             ))
            }
            <li>
              <button type="button" onClick={() => { this.setPage(pager.currentPage + 1); this.setPagingAction('backward'); }} disabled={pager.currentPage === pager.totalPages ? true : null}>
                <i className="fas fa-chevron-right" />
              </button>
            </li>
            <li>
              <button type="button" onClick={() => { this.setPage(pager.totalPages); this.setPagingAction('backward'); }} disabled={pager.currentPage === pager.totalPages ? true : null}>
                <i className="fas fa-angle-double-right" />
              </button>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

  static propTypes = {
    onChangePage: PropTypes.func.isRequired,
    onChangeAction: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };
}
